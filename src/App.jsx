import { useState, useCallback } from "react";
import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useDispatch, useSelector } from "react-redux";

import { updateNode, addEdges, deleteEdge } from "./slices/diagramSlice";

import QuestionNode from "./customComponents/QuestionNode";
import SubQuestion from "./customComponents/SubQuestion";
import ResultNode from "./customComponents/ResultNode";
import CustomEdge from "./customComponents/CustomEdge";
import AddNode from "./customComponents/AddNode";

const nodeTypes = {
  question: QuestionNode,
  "sub question": SubQuestion,
  result: ResultNode,
  addNode: AddNode,
};
const edgeTypes = {
  customEdge: CustomEdge,
};

function Flow() {
  const nodes = useSelector((state) => state.diagram.nodes);
  const edges = useSelector((state) => state.diagram.edges);
  const dispatch = useDispatch();

  const onNodeChange = useCallback((changes) => {
    dispatch(updateNode(changes));
  });

  const onEdgeChange = useCallback((change) => {
    dispatch(deleteEdge(change));
  });

  const onConnect = useCallback((connection) => {
    dispatch(addEdges(connection));
  });

  return (
    <>
      <div></div>
      <div
        style={{
          height: "min(90vw,70vh)",
          width: "min(90vw,70vh)",
          border: "2px solid #011110",
          borderRadius: "5px",
          margin: "auto",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodeChange}
          onEdgesChange={onEdgeChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <div></div>
    </>
  );
}

export default Flow;
