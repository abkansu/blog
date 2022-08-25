import React from "react";
import SideBar from "../components/SideBar";

const About = (props) => {
  return (
    <div
      style={{
        width: "80%",
        alignSelf: "center",
        margin: "auto",
        height: "100%",
      }}
    >
      <SideBar />
      <div style={{ float: "right", width: "88%" }}>
        <h2
          style={{
            fontFamily: "Josefin Sans, sans-serif",
            textDecorationLine: "underline",
          }}
        >
          Lorem Ipsum
        </h2>
        <p
          style={{ fontFamily: "Josefin Sans, sans-serif", fontSize: "1.5rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus
          nunc sit amet feugiat placerat. Nulla placerat odio nisi, et convallis
          lacus sagittis at. Aenean malesuada purus sed tortor iaculis, non
          imperdiet leo venenatis. Duis nisl mi, aliquam vel enim nec,
          consectetur pharetra eros. Quisque at interdum elit, eget pellentesque
          ex. Proin et ullamcorper arcu. Morbi a rhoncus justo. Curabitur
          faucibus pretium odio eget cursus. Vivamus pellentesque suscipit lacus
          eu egestas. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Suspendisse potenti. Sed condimentum
          dignissim sapien. Duis dapibus ex vitae odio tempus, non convallis
          sapien sodales. Vestibulum viverra lorem nisi, quis interdum velit
          hendrerit elementum. Etiam fringilla lacus ut ipsum feugiat aliquet.
          Ut eget aliquam urna. Nam luctus lacus ac urna mattis, vel pharetra
          nisl scelerisque. Pellentesque ut tristique leo, a placerat velit. Sed
          congue dapibus volutpat. Donec libero odio, vulputate pellentesque
          nisl ut, tempor fringilla lorem. Nullam a tellus at diam tempor
          sagittis. Vestibulum convallis iaculis magna, ac ullamcorper diam
          ultricies quis. Nulla consequat a ex id mollis. Nulla congue ligula
          pharetra, blandit ipsum sed, malesuada mi. Phasellus imperdiet
          hendrerit nisl, sed euismod nisi laoreet ac. Mauris nec neque ut nulla
          vulputate varius. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vestibulum vel tincidunt
          nisi, quis pharetra neque. Duis auctor nisl a nibh cursus euismod.
          Nunc sed tortor sit amet velit posuere tempus. In hac habitasse platea
          dictumst. Proin dignissim, justo id viverra sagittis, eros erat
          condimentum nunc, sed eleifend odio sem at nunc. Fusce viverra
          convallis ultrices. Nam magna orci, dapibus sed lacus vitae, euismod
          lacinia leo. Nam quis mauris imperdiet, sollicitudin leo at, semper
          nunc. Sed blandit quam non vestibulum sollicitudin. Aliquam et
          fermentum ipsum. Nullam sagittis nisi a leo aliquet iaculis. Nam
          luctus tincidunt pulvinar. Donec nec venenatis risus. Donec magna
          orci, sagittis sed enim id, suscipit finibus libero. Vivamus egestas
          odio nec eleifend euismod. Nam eu dolor nisl. Pellentesque ut
          scelerisque diam. Vestibulum consectetur orci vel mollis venenatis.
          Nulla posuere fermentum odio, et auctor felis vulputate vitae. In ut
          sapien iaculis, ultrices lorem eget, vestibulum ipsum. Vestibulum ut
          leo diam. Quisque a justo ipsum. Vivamus condimentum, ante vitae
          rutrum dictum, metus neque finibus tortor, ullamcorper aliquam tortor
          justo non dui. Aenean sit amet elit ex. Integer consectetur risus ac
          augue consequat efficitur. Quisque nec tellus sodales, interdum ex
          sed, laoreet nibh. Fusce a ornare ante. Suspendisse eget mauris
          feugiat, aliquet lectus eget, suscipit nulla. Sed malesuada leo in ex
          posuere laoreet.
        </p>
      </div>
    </div>
  );
};

export default About;
