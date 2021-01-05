import React, { useState } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';

// to fill initial elements  
const initialElements = [
    { id: '1', type: 'input', data: { label: 'Actions' }, position: { x: 300, y: 180 } }

]


const MyFlow = () => {


    // To Add a New Node 
    const [elements, setElements] = useState(initialElements);
    const [name, setName] = useState("");

    const addNode = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }
        }));
    };



    // To connect between two nodes
    const onConnect = (params) => setElements(e => addEdge(params, e));




    return (
        <div>
            <ReactFlow
                elements={elements}
                style={{ width: '100%', height: '85vh' }}
                onConnect={onConnect}
                connectionLineStyle={{ stroke: '#ddd', strokeWidth: 2 }}
                connectionLineType="bezier"
                snapToGrid={true}
                snapGrid={[16, 16]}
            >

                <Background
                    color="#888"
                    gap={16} />

                {/*used to color distinguishing the object  */}
                <MiniMap
                    nodeColor={n => {
                        if (n.type === 'input') return 'blue';
                        return '#FFCC00'
                    }} />

                <Controls />
            </ReactFlow>

            <div>
                <input type="text"
                    name="title"
                    onChange={e => setName(e.target.value)}
                />

                <button type="button" onClick={addNode}>Add Node</button>
            </div>

        </div>
    )
}

export default MyFlow;