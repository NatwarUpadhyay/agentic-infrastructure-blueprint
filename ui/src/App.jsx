import React, { useState } from 'react';

// Extremely simple UI for learners to build upon
export default function App() {
  const [logs, setLogs] = useState(["Agent initialized..."]);
  const [pendingCommand, setPendingCommand] = useState("az group delete --name test");

  const approveCommand = () => {
    setLogs([...logs, `Approved execution of: ${pendingCommand}`]);
    setPendingCommand("");
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Agentic DevOps Control Plane (Learning Template)</h1>
      <p>This is a barebones React UI for Human-in-the-loop (HITL) agent architectures.</p>
      
      {/* --- AGENT MINDMAP / ARCHITECTURE VISUALIZATION --- */}
      <div style={{ margin: '2rem 0', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h2>Agent Workflow Mindmap</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
          
          <div style={{ padding: '0.8rem', background: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '8px', fontWeight: 'bold' }}>
            👤 User Intent (Natural Language)
          </div>
          ↓
          <div style={{ padding: '0.8rem', background: '#fef08a', border: '1px solid #fde047', borderRadius: '8px', fontWeight: 'bold' }}>
            🤖 Agentic Orchestrator (LangChain / OpenRouter)
          </div>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              ↙<br/>
              <div style={{ padding: '0.8rem', background: '#d9f99d', border: '1px solid #fef08a', borderRadius: '8px', fontSize: '0.9rem' }}>
                🧠 Skill: neo4j-graph-mapper<br/>(Reads Infrastructure State)
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              ↓<br/>
              <div style={{ padding: '0.8rem', background: '#bbf7d0', border: '1px solid #86efac', borderRadius: '8px', fontSize: '0.9rem' }}>
                ⚡ Skill: azure-cli-executor<br/>(Executes safe 'az' commands)
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              ↘<br/>
              <div style={{ padding: '0.8rem', background: '#fecaca', border: '1px solid #fca5a5', borderRadius: '8px', fontSize: '0.9rem' }}>
                🛑 Shield: HITL Loop<br/>(Intercepts destructive commands)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: '2rem 0', p: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>HITL Approval Queue</h2>
        {pendingCommand ? (
          <div>
            <p style={{ color: 'red', fontWeight: 'bold' }}>Destructive Command Detected:</p>
            <code style={{ background: '#eee', padding: '0.5rem', display: 'block' }}>{pendingCommand}</code>
            <br />
            <button onClick={approveCommand} style={{ background: 'green', color: 'white', padding: '0.5rem 1rem' }}>
              Approve Execution
            </button>
          </div>
        ) : (
          <p>No actions pending approval.</p>
        )}
      </div>

      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>Agent Action Logs</h2>
        <ul style={{ fontFamily: 'monospace' }}>
          {logs.map((log, i) => <li key={i}>{log}</li>)}
        </ul>
      </div>
    </div>
  );
}
