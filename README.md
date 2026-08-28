# VANTA ATC

VANTA ATC is the Windows controller client for the VANTA flight simulation network.

## Working MVP

- Desktop Electron application
- Controller position selection
- Development authentication
- Live VANTA aircraft radar
- Aircraft altitude, speed, heading, vertical speed, squawk and COM1
- Live filed flight plans
- Realtime connection to the VANTA network
- ATC position/frequency registration

Run the VANTA realtime server first, then `pnpm install` and `pnpm dev` here.

Production authentication and the real voice media transport are separate next-stage components; the current MVP deliberately uses the network's realtime signaling and state path first.
