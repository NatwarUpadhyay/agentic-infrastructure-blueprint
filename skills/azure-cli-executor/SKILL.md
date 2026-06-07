<skill>
<name>azure-cli-executor</name>
<description>
Executes Azure CLI (`az`) commands directly against the authenticated subscription. 
USE THIS when you need to provision, modify, or inspect Azure resources (e.g., VMs, VNets, Resource Groups).

**CRITICAL GUARDRAIL:** Never execute a `delete` command via this skill without explicit prior HITL approval recorded in your session memory.
</description>
</skill>

### How to use:
This skill assumes you have an active Model Context Protocol (MCP) server running or are utilizing the Python orchestration loop (`agent/agent.py`). 
To apply: Map your LLM reasoning output into a strictly formatted JSON array of the command arguments, omitting the base `az` string.
Example: `["group", "create", "--name", "rg-dev", "--location", "eastus"]`
