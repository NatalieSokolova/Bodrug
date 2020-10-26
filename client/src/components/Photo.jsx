// import React from "react";
// import usePhotoData from "../hooks/usePhotoData";
// import "./Photo.css";

import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

const images = [
  { source: "../assets/photos/1-min.jpg" },
  { source: "../assets/photos/2-min.jpg" },
  { source: "../assets/photos/3-min.jpg" },
  { source: "../assets/photos/4-min.jpg" },
  { source: "../assets/photos/5-min.jpg" },
  { source: "../assets/photos/6-min.jpg" },
];

class Photo extends React.Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState((state) => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}

export default Photo;

// export default function Photo() {
// const { state, setState } = usePhotoData();

// const photoList = state.photos.map((photo) => (
//   <div key={photo.id} classNameName="photoContainer">
//     <span>
//       <img
//         classNameName="photo"
//         src={require(`../assets/photos${photo.url}`)}
//         alt="Photo By Yuliia Bodrug"
//       />
//     </span>
//     <div id="description">{photo.description}</div>
//     <br />
//   </div>
// ));

// return (
//   <span>
//     <h1>Photo Portfolio</h1>
//     <div>{photoList}</div>
//   </span>
// );
// }

{
  /* // const images = [
//   { src: "../assets/photos/1-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
//   { src: "../assets/photos/2-min.jpg" },
// ]; */
}
