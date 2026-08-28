# VANTA ATC

VANTA ATC is the dedicated Windows controller client for the VANTA flight simulation network.

It is designed to work with the VANTA Pilot client and shared VANTA realtime network.

## Planned production capabilities

- Windows desktop application
- VANTA account authentication
- Controller authorization and position claiming
- Worldwide airport/position search
- DEL / GND / TWR / APP / DEP / CTR positions
- Live aircraft radar
- Callsign, aircraft type, registration, altitude, speed, heading and vertical speed
- Squawk/transponder information
- Live flight plans
- Airport frequencies
- Frequency-tuned radio receive/transmit
- Push-to-talk
- ATIS creation and publication
- Controller handoffs
- Realtime connection/heartbeat
- Controller session management
- Network status

## Radio architecture

The ATC client does not use a global chat room. Radio audio is supplied by the VANTA voice service and is routed according to the controller's authorized position, active frequency and network radio rules.

Pilot COM1/COM2 state originates from the pilot's simulator connection. The ATC client receives transmissions for the frequency/position it is controlling.

## Data

The ATC client consumes the authoritative VANTA realtime aircraft stream. It does not generate simulated aircraft positions.

## Development

This repository is the dedicated ATC client. Shared VANTA protocol and domain types remain in the main VANTA repository and should be consumed as versioned packages when the release build is established.

The production application is intended to be a Windows desktop executable, not a browser-only application.
