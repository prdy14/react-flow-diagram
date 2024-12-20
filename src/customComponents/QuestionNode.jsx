import { Handle, Position } from "@xyflow/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteNode } from "../slices/diagramSlice";

export default function QuestionNode({ id, data } = props) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundColor: "#80919E",
        padding: "0.5rem",
        color: "white",
        fontSize: "1rem",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "3px" }}>{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <button
        style={{
          color: "red",
          pointerEvents: "all",
          cursor: "pointer",
          fontSize: "15px",
          marginLeft: "3px",
          borderRadius: "5px",
          height: "20px",
          border: "none",
        }}
        onClick={() => dispatch(deleteNode(id))}
      >
        x
      </button>
    </div>
  );
}
