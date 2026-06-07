<skill>
<name>enterprise-webhook</name>
<description>
Triggers mock legacy enterprise integrations (e.g., ServiceNow, Jira) by sending compliance and operational incidents to the Java 11 Hooks API endpoint (`http://localhost:8080/api/tickets`).
USE THIS when an operation violates security baseline policies or when a major deployment finishes.
</description>
</skill>

### Integration Format
Send payloads as stringified JSON:
`{"intent": "policy_violation", "severity": "high", "description": "Port 22 exposed to Internet"}`
