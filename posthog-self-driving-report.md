# PostHog Self-driving setup report

## Summary

PostHog Self-driving is configured with health-check, error-tracking, and support signal sources. The focused built-in scout troop is active; findings should begin appearing in the [Self-driving inbox](https://us.posthog.com/project/612743/inbox) within about 30 minutes.

## AI data processing

Approved.

## GitHub

The PostHog GitHub App was already connected before this setup, as verified by the wizard. No GitHub Issues warehouse source was requested during this run.

## Products enabled

| Product | Result | Notes |
|---|---|---|
| Session Replay | Already enabled | This is a mobile Expo app using `posthog-react-native`. No recent recordings were found in the probe, so Replay SDK configuration and live recording delivery still need verification. |
| Error Tracking | Already enabled | The mobile code explicitly records caught exceptions in the profile flow. |
| Support (Conversations) | Enabled | It remains inert until an inbound email, inbox, or Slack channel is connected in PostHog. |

## Signal sources

| `source_product` | `source_type` | Action |
|---|---|---|
| `health_checks` | `health_issue` | Enabled — config `01a0ab01-4914-7b5f-a96e-f6aec17518aa` |
| `error_tracking` | `issue_created` | Enabled — config `01a0ab01-4a4c-745b-96c1-592b8a717450` |
| `error_tracking` | `issue_reopened` | Enabled — config `01a0ab01-49ff-7340-a5aa-2b6a2d340de7` |
| `error_tracking` | `issue_spiking` | Enabled — config `01a0ab01-4934-7cf8-8f6f-a2d500c29914` |
| `conversations` | `ticket` | Enabled — config `01a0ab01-4921-74f8-8123-c88fdacbf528` |
| `signals_scout` | `cross_source_issue` | On by default; no row is needed or was created. |
| `session_replay` | `session_analysis_cluster` | Skipped — retired route; Replay Vision scanners own replay coverage. |
| `replay_vision` | — | Skipped — scanners are self-authorizing; no source-config row is appropriate. |
| `logs`, `llm_analytics` | — | Skipped — no applicable v1 responder for this setup. |

## Connected tools

No external tool was selected in the connected-tools picker. Consequently, no external warehouse source or connected-tool responder was added.

## Scout troop

**Active scouts (2):**

| Scout | Reason |
|---|---|
| `signals-scout-general` | Covers cross-product changes and otherwise-uncovered surfaces. |
| `signals-scout-product-analytics` | Fits the app’s captured learning, authentication, navigation, and preference-selection activity. |

**Disabled scouts (25):**

| Scout | Reason |
|---|---|
| `signals-scout-ai-observability` | No confirmed LLM trace events. |
| `signals-scout-anomaly-detection` | No project profile or established insight baseline to monitor yet. |
| `signals-scout-apm` | No distributed tracing surface was identified. |
| `signals-scout-conversations` | Support has no inbound channel yet. |
| `signals-scout-csp-violations` | Mobile project; no CSP reporting surface identified. |
| `signals-scout-customer-analytics` | No account/group analytics surface identified. |
| `signals-scout-data-pipelines` | No CDP destinations, batch exports, or Hog flows identified. |
| `signals-scout-data-warehouse` | No warehouse source is connected. |
| `signals-scout-error-tracking` | Covered by the enabled native error-tracking source. |
| `signals-scout-experiments` | No active experiment usage was confirmed. |
| `signals-scout-feature-flags` | No flag usage was confirmed in the app code. |
| `signals-scout-health-checks` | Native health-check source is enabled; the focused troop does not need a second health route yet. |
| `signals-scout-inbox-validation` | Fresh setup has no resolved findings to re-measure. |
| `signals-scout-insight-alerts` | No configured insight-alert surface was identified. |
| `signals-scout-logs` | No logs usage was confirmed. |
| `signals-scout-mcp-tool-calls` | No MCP telemetry surface was identified. |
| `signals-scout-observability-gaps` | Kept off until event usage and insight coverage mature. |
| `signals-scout-replay-vision` | No earlier Replay Vision scanner inventory exists; scanner setup is deferred below. |
| `signals-scout-revenue-analytics` | No payment or revenue surface was identified. |
| `signals-scout-session-replay` | Replay coverage belongs to Replay Vision scanners, not a duplicate scout. |
| `signals-scout-skills-store` | No team-authored skills-store usage was identified. |
| `signals-scout-surveys` | No surveys exist. |
| `signals-scout-tasks` | No task-monitoring surface was identified. |
| `signals-scout-web-analytics` | This is a mobile app rather than a browser traffic surface. |
| `signals-scout-web-vitals` | This is a mobile app rather than a browser Core Web Vitals surface. |

**Run budget:** 100 maximum runs per day; 0 used and 100 remaining when configured. The server banner states: “Scouts are in early access. Each project gets up to 100 scout runs a day. Contact team-self-driving@posthog.com if you need more.”

## Custom scouts

No custom scouts were created. The proposal included focused checks for language-choice flow health and AI-teacher demand, but the explicit “None — keep the built-in troop” choice was selected. The language-choice candidate would have watched raw step liveness rather than a saved-funnel conversion; the AI-teacher candidate would have isolated demand for a planned learning surface. Event-schema verification was also unavailable to this MCP token because it lacks the property-definition read scope.

If a future scout becomes noisy, set its `emit` config to `false` in PostHog to keep it in dry-run mode.

## Replay Vision scanners

Replay Vision scanners are LLM monitors that inspect individual session recordings on a schedule and push confirmed findings to the inbox. They are the only part of this setup that spends Replay Vision quota; individual findings arrive at half weight and need corroboration before promotion into a report.

| Brief | Status | Scope / reason |
|---|---|---|
| Completion-flow breakage monitor | Deferred | No active recordings were found and the installed workflow did not expose the locked scanner-brief template needed to create a safe, product-tailored monitor. The likely product flow is onboarding and language selection, but it was not used as an invented scanner scope. |
| User-frustration monitor | Deferred | The locked `$rageclick` brief template was not available in the installed workflow. |

No Replay Vision credits were spent or estimated because no scanner was created.

## Follow-ups

- [ ] Connect an inbound Support channel (email, inbox, or Slack) in PostHog so enabled support-ticket signals can begin arriving.
- [ ] Verify that the Expo React Native Session Replay SDK produces live recordings; none appeared in the recent-recordings probe.
- [ ] Re-run Replay Vision scanner setup once the scanner-core and locked monitor-brief skills are available, then add the completion-flow and user-frustration monitors with inbox emission enabled.
- [ ] Reauthorize the MCP connection with `property_definition:read` if event-taxonomy verification is needed for future custom scouts.
- [ ] Enable a currently disabled specialist only when its corresponding product surface becomes actively used.

## Files changed

| File | Change |
|---|---|
| `posthog-self-driving-report.md` | Created this setup report. |

No application source files were modified.

## What happens next

Fresh scout configurations are picked up by the coordinator within about 30 minutes and run against the daily budget. Their findings cluster into reports in the [Self-driving inbox](https://us.posthog.com/project/612743/inbox), where actionable findings can become coding tasks.
