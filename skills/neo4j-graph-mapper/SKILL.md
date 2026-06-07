<skill>
<name>neo4j-graph-mapper</name>
<description>
Queries the current infrastructure knowledge graph to establish state, network topologies, and RBAC IAM roles.
USE THIS to understand dependencies before modifying resources.
</description>
</skill>

### Query Standards
When formatting queries for Neo4j, use Cypher syntax.
Example: `MATCH (r:ResourceGroup {name: 'rg-dev'})-[:CONTAINS]->(v:VNet) RETURN v`

If the Neo4j instance is unreachable, fallback to standard Azure CLI `az resource list` commands and alert the user.
