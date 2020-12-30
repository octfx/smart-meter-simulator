<template>
  <div>
    <h1>Smart Meter Simulator</h1>

    <div class="settings">
      <input id="service-url" ref="serviceUrl" type="url" value="http://localhost:8080/meters/:ID/reading" @input="validate"/>
      <span class="help-text">URL des Log-Services mit API-Endpoint.</span>
      <button id="add-meter" @click="addMeter" disabled>Add Meter</button>
    </div>

    <div class="meter-container">
      <SmartMeterSimulator
          v-for="meter in meters"
          :key="meter.id"
          :meter="meter"
          :service-url="serviceUrl"
          :remove="removeMeter"
      >
      </SmartMeterSimulator>
    </div>
  </div>
</template>

<script>
import SmartMeterSimulator from './SmartMeterSimulator'

export default {
  name: 'Index',
  components: { SmartMeterSimulator },
  data: () => {
    return {
      serviceUrl: '',
      id: 1,
      meters: [],
    }
  },
  mounted () {
    this.validate({
      target: this.$refs.serviceUrl
    });
  },
  methods: {
    addMeter: function () {
      this.meters.push({
        id: (this.id++)
      })
    },
    removeMeter: function (id) {
      this.meters = this.meters.filter(meter => {
        return meter.id !== id
      })
    },
    validate: function (e) {
      let serviceUrl
      try {
        serviceUrl = new URL(e.target.value)
      } catch (exception) {
        e.target.style.borderColor = 'red'
        return
      }

      document.getElementById('add-meter').removeAttribute('disabled')
      e.target.style.borderColor = 'darkgrey'
      this.serviceUrl = serviceUrl.toString()
    }
  }
}
</script>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.help-text {
  font-size: 0.75rem;
  text-align: left;
}

button {
  margin-top: 1rem;
  background: #2c3e50;
  color: azure;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #1c2733;
}

button:disabled {
  background: lightgray;
  cursor: default;
}

.meter-container {
  margin-top: 2rem;
}
</style>
