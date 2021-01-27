# Smart Meter Simulation
A small tool for logging Smart Meter values against a logging service.

Tool found at https://octfx.github.io/smart-meter-simulator

## Description
Each meter logs against the endpoint defined in the input.  
The default endpoint is set to `http://localhost:8080/meters/:ID/reading`.  
`:ID` will be replaced by the simulator with the corresponding Meter ID.

After clicking the `Add Meter` button, a new smart meter will be instantiated.

### Smart Meter
The header of the smart meter container contains the Smart Meter ID on initialisation, and the total wattage accumulated by the meter.   
Each meter has four configurable settings.

#### ID input
This is the id used for generating the log url and is further sent as a post parameter. It defaults to previous Meter ID + 1.  
If the id was changed, and the logging is currently active, the new id will only be sent after the logging was stopped and re-started. 

#### AuthKey input
This is the auth key used for authorizing the log data that gets sent. The value can be found in the backend Database.

#### Log Interval slider
This is the log interval. Meaning each x minutes / seconds a log is sent to the logging service. It defaults to one minute.  
The logging interval can be changed at runtime and is immediately active.

#### Wattage Gain slider
The wattage to gain in each second.  
The gain interval can be changed at runtime and is immediately active.

#### Start / Stop Log button
Starts or stops the logging and wattage gain interval.

#### Log Output
This container holds the output for each logging request.  
Successful logs are logged as `Created` with the total wattage to this point and timestamp.  
Error logs are prefixed with `ERROR:` and contain the http code and message.

## Notes
Sending of HTTP requests is done using [axios](https://github.com/axios/axios).  
The number of active smart meters is limited by the performance of the browser, but 'should' generally be >100.

## Project setup
```
npm install
npm serve
```
