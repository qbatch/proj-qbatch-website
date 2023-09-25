import styled from "styled-components";

const BlogWrapper = styled.div`
.bumper {
  width: 100%;
  height: 1800px;
  background-color: orange;
}

.horizontal-section, .horizontal-section2 {
  padding: 100px 0;
  background-color: pink;
}

.sticky-wrapper, .sticky-wrapper2 {
  position: sticky;
  top: 200px;
  width: 100%;
  overflow: hidden;
}

.element-wrapper, .element-wrapper2 {
  position: relative;
  display: flex;
  padding-left: 96px;
}

.element {
  width: 500px;
  height: 400px;
  background-color: purple;
  margin: 0 20px 0 0;
  flex-shrink: 0;
}

`

export default BlogWrapper;