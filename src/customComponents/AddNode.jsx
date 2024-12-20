import { Handle, Position } from "@xyflow/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addNode, deleteNode } from "../slices/diagramSlice";

const nodes = ["question", "result", "sub question"];

export default function AddNode({ data }) {
  const dispatch = useDispatch();
  const getId = () => {
    return Math.floor(Math.random() * 100000);
  };
  const positionX = Math.floor(Math.random() * 100);
  const positionY = Math.floor(Math.random() * 100);
  return (
    <div
      style={{
        backgroundColor: "#acccde",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <div style={{ padding: "3px", color: "red", textAlign: "center" }}>
        {data.label}
      </div>
      <select
        name=""
        id="select"
        onChange={(e) => {
          dispatch(
            addNode({
              id: `${getId()}`,
              data: { label: "Edit your label" },
              position: { x: 400, y: -200 },
              type: e.target.value,
            })
          );
        }}
        style={{ all: "unset", padding: "3px" }}
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {nodes.map((node, index) => {
          return (
            <option key={index} value={node}>
              {node}
            </option>
          );
        })}
      </select>
    </div>
  );
}
