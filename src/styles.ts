export const styles = `
.scroll-bar::-webkit-scrollbar {
  width: 12px;
  background-color: #181818;
}

.scroll-bar::-webkit-scrollbar-thumb {
  background-color: #565656; 
}

.scroll-bar::-webkit-scrollbar-thumb:hover {
  background: #484848; 
}

.video-size {
  padding: 0px 0px !important;
}

.video-guard {
  position: absolute;
  z-index: 100;
  top: 60px;
  width: 400px;
  height: 400px;
}

.clickable:hover {
  cursor: pointer;
}

.sortable-row-header:after {
  content: ' ↕';
}

.sorted-row-header-desc:after {
  content: ' ↓';
}

.sorted-row-header-asc:after {
  content: ' ↑';
}
`;
