# VANTA ATC Architecture

```text
                  VANTA NETWORK
                       |
              +--------+--------+
              |                 |
         VANTA Pilot       VANTA ATC
          Windows app      Windows app
              |                 |
          SimConnect       Controller
              |                 |
              +--------+--------+
                       |
                 VANTA Realtime
                       |
              +--------+--------+
              |                 |
          Aircraft state      ATC state
              |                 |
              +--------+--------+
                       |
                  VANTA Voice
                       |
             Frequency/radio routing
```

## Aircraft panel

Selecting an aircraft should expose callsign, registration, aircraft type, latitude/longitude, altitude, speed, heading, vertical speed, squawk, COM1/COM2, departure, arrival, route, simulator and connection state.

## Position workflow

1. Authenticate.
2. Request available ATC positions.
3. Select a position.
4. Server validates authorization and exclusivity.
5. Client receives the position frequency and live aircraft stream.
6. Radio receive/transmit becomes available for that position.
7. Release the position on disconnect.

## Voice

Voice must be a realtime media path, preferably Opus over an appropriate low-latency transport. REST is not a voice transport.

The server determines eligible receivers. The client only renders audio streams it is authorized to receive.
