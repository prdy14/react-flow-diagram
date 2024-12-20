import {
  BezierEdge,
  getBezierPath,
  EdgeLabelRenderer,
  useReactFlow,
} from "@xyflow/react";
import React from "react";

export default function CustomEdge(props) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <button
          style={{
            all: "unset",
            position: "absolute",
            transform: `translate(-50%,-50%) translate(${labelX}px,${labelY}px)`,
            color: "red",
            pointerEvents: "all",
            cursor: "pointer",
          }}
          onClick={() => {}}
        >
          x
        </button>
      </EdgeLabelRenderer>
    </>
  );
}
