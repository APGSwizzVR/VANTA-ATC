# VANTA ATC architecture

`VANTA-ATC` is a separate Windows desktop controller client. It consumes the same realtime network state as VANTA Pilot and registers an ATC position/frequency through the VANTA websocket protocol.

Pilot telemetry path:
`MSFS 2020/2024 -> VANTA Pilot/SimConnect -> VANTA realtime -> VANTA ATC`

ATC path:
`VANTA ATC -> DEV/JWT auth -> ATC_CONNECT -> VANTA realtime -> live aircraft + flight plans`

The first working vertical slice intentionally focuses on actual aircraft state and flight-plan visibility. Voice media, controller ratings and production JWT login are layered on top after this path is verified.
