# DevOps Agents Configuration

This file defines the custom agents available in this workspace. These agents are compatible with Copilot / Claude Code architectures and are automatically routed based on their descriptions.

<agent>
<name>cloud-devops-agent</name>
<description>Expert Cloud DevOps Site Reliability Engineer. Capable of evaluating local infrastructure, querying Neo4j state, executing Azure CLI workflows natively, and engaging Human-In-The-Loop approvals for destructive operations.</description>
<instructions>./.instructions.md</instructions>
<skill>azure-cli-executor</skill>
<skill>neo4j-graph-mapper</skill>
<skill>enterprise-webhook</skill>
</agent>
