import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Section {
  id: number;
  title: string;
  expanded: boolean;
}

interface SidebarState {
  sections: Section[];
}

const initialState: SidebarState = {
  sections: [],
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleExpanded: (state, action: PayloadAction<number>) => {
      const section = state.sections.find(
        (section) => section.id === action.payload
      );
      if (section === undefined) {
        throw new Error(`No section with ID ${action.payload}`);
      }

      section.expanded = !section.expanded;
    },
  },
});

export const { toggleExpanded } = sidebarSlice.actions;

export default sidebarSlice.reducer;
