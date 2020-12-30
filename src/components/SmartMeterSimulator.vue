<template>
  <div class="smart-meter">
    <header>
      <span style="text-decoration: underline; cursor: pointer"
            @click="contentVisible = !contentVisible">SmartMeter: {{ meter.id }}</span>
      <span>Total: {{ wattage.toLocaleString('de-DE') }} W</span>
      <button @click="removeMeter">-</button>
    </header>
    <div class="content" :class="{hidden: !contentVisible}">
      <div class="meter-settings">
        <div class="form-group">
          <label :for="`meter-id-${meter.id}`">ID</label>
          <input :name="`meter-id-${meter.id}`" :id="`meter-id-${meter.id}`" type="number" min="1" v-model.number="meterId">
        </div>

        <div class="form-group">
          <label :for="`auth-key-${meter.id}`">Auth Key</label>
          <input :name="`auth-key-${meter.id}`" :id="`auth-key-${meter.id}`" type="text" v-model="authKey"
                 @input="enableLogButton">
        </div>

        <div class="form-group">
          <label :for="`log-interval-${meter.id}`">Log Interval</label>
          <input name="log-interval" :id="`log-interval-${meter.id}`" class="log-interval" type="range" min="0.1"
                 max="10" step="0.1" v-model.number="intervalValue" @input="changeLogInterval">
          <span class="interval-text">Jede {{ this.intervalValue }} Minuten</span>
        </div>

        <div class="form-group">
          <label :for="`wattage-gain-${meter.id}`">Wattage Gain</label>
          <input name="wattage-gain" :id="`wattage-gain-${meter.id}`" class="wattage-gain" type="range" min="0"
                 max="100" step="0.1" v-model.number="wattageGain">
          <span class="interval-text">{{ this.wattageGain }} Watt/s</span>
        </div>

        <div class="form-group">
          <button :id="`start-log-${meter.id}`" class="start-log" disabled @click="startLog">Start Log</button>
        </div>
      </div>
      <div>
        <h4>Log Ouput</h4>
        <pre class="log-output">
          <span v-for="entry in logs" :key="entry.timestamp">{{ entry.msg }} - {{ entry.total }} W - {{
              entry.timestamp
            }}</span>
      </pre>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SmartMeterSimulator',
  props: {
    meter: Object,
    serviceUrl: String,
    remove: Function,
  },
  data () {
    return {
      contentVisible: true,
      wattage: 0,
      wattageGain: 0,
      wattageGainInterval: null,
      intervalValue: 1,
      authKey: '',
      meterId: this.meter.id,
      logs: [],
      intervalId: null,
      finalUrl: '',
    }
  },
  methods: {
    removeMeter: function () {
      clearInterval(this.intervalId)
      clearInterval(this.wattageGainInterval)
      this.remove(this.meter.id)
    },
    enableLogButton: function (e) {
      if (e.target.value.length > 0) {
        document.getElementById(`start-log-${this.meter.id}`).removeAttribute('disabled')
      } else {
        document.getElementById(`start-log-${this.meter.id}`).setAttribute('disabled', true)
      }
    },
    changeLogInterval: function () {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId)
        let interval = 60000 * this.intervalValue
        this.intervalId = setInterval(this.log.bind(this), interval)
      }
    },
    startLog: function () {
      this.finalUrl = this.serviceUrl.replace(/:ID/, this.meterId)

      let interval = 60000 * this.intervalValue

      const btn = document.getElementById(`start-log-${this.meter.id}`)

      if (btn.classList.contains('active')) {
        clearInterval(this.intervalId)
        clearInterval(this.wattageGainInterval)
        btn.innerText = 'Start Log'
      } else {
        btn.innerText = 'Stop Log'
        this.intervalId = setInterval(this.log.bind(this), interval)
        this.gainWattage()
      }

      btn.classList.toggle('active')
    },
    log: function () {
      axios.post(this.finalUrl, {
        meterId: this.meterId,
        meterValue: this.wattage,
        timestamp: (new Date()).toISOString()
      }, {
        params: {
          authKey: this.authKey
        }
      })
          .then(result => {
            if (result.status === 201) {
              this.logs.push({
                'msg': 'Created',
                'status': 201,
                'total': this.wattage,
                'timestamp': (new Date()).toLocaleString('de-DE')
              })
            }
          })
          .catch(error => {
            // TODO display error
            console.error(error)
            this.logs.push({
              'msg': `ERROR: ${error.message}`,
              'status': error.status,
              'timestamp': (new Date()).toLocaleString('de-DE')
            })
          })
    },
    gainWattage: function () {
      this.wattageGainInterval = setInterval(function () {
        this.wattage += this.wattageGain
      }.bind(this), 1000)
    }
  }
}
</script>

<style scoped>
.smart-meter {
  margin-top: 1rem;
  padding: 0.5rem;

  background: lightgray;
  border-radius: 0.25rem;
  text-align: left;

  width: 50vw;

  overflow: hidden;
}

header {
  font-size: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: -0.5rem -0.5rem 0 -0.5rem;
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem 0.5rem;
}

header span {
  align-self: center;
}

button {
  background: lightcoral;
  border: 0;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  color: #fff;
  cursor: pointer;
  align-self: center;
}

.content {
  margin-top: 0.75rem;
}

.content.hidden {
  display: none;
}

.meter-settings {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.form-group > * {
  display: block;
  align-content: center;
}

.interval-text {
  font-size: 0.75rem;
}

input[type=range] {
  padding: 0;
}

.start-log {
  background-color: #229922;
  padding: 0.5rem;
}

.start-log.active {
  background-color: orangered;
}

.start-log:disabled {
  background: darkgrey;
  cursor: default;
}

h4 {
  margin-bottom: -1.15rem;
  color: azure;
  position: relative;
  background-color: #1c2733;
  padding: 0.5rem;
  margin-left: -0.5rem;
  width: 100px;
}

.log-output {
  background-color: #1c2733;
  color: azure;
  font-family: monospace;
  overflow-y: scroll;
  max-height: 100px;
  margin: 0 -0.5rem -0.5rem -0.5rem;
  padding: 0.75rem 0 0 0.5rem;
  scroll-snap-align: start end;
  scroll-padding-top: 0.5rem;
}

.log-output span {
  display: block;
}
</style>
