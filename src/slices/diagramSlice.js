import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyNodeChanges } from "@xyflow/react";
import data from "../data/jsonData.json";

export const diagramSlice = createSlice({
  name: "diagram",
  initialState: {
    nodes: data.diagrams[0].nodes,
    edges: data.diagrams[0].edges,
  },
  reducers: {
    addNode: (state, action) => {
      let flag = false;
      state.nodes.forEach((node) => {
        if (node.id == action.payload.id) {
          flag = true;
        }
      });
      if (!flag) {
        state.nodes.push(action.payload);
      }
    },
    updateNode: (state, action) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    deleteNode: (state, action) => {
      state.nodes = state.nodes.filter((node) => node.id !== action.payload);

      state.edges = state.edges.filter(
        (edge) => !edge.id.includes(action.payload)
      );
    },

    addEdges: (state, action) => {
      const obj = action.payload;
      const newEdge = {
        id: `${obj.source}-${obj.target}`,
        ...obj,
        animated: true,
        type: "customEdge",
      };
      console.log(newEdge);
      state.edges = addEdge(newEdge, state.edges);
    },
    deleteEdge: (state, action) => {
      state.edges = state.edges.filter(
        (edge) => edge.id !== action.payload[0].id
      );
    },
  },
});

export const { addNode, updateNode, deleteNode, addEdges, deleteEdge } =
  diagramSlice.actions;

export default diagramSlice.reducer;
