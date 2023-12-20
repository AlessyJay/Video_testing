import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <h2>Multimedia Elements</h2>
      <p>
        HTML multimedia allows us to embed audio, video, and other media in our
        web pages. These elements provide the means to deliver a rich multimedia
        experience to users. In this text, we will discuss the multimedia
        elements and how to use them in an HTML document.
      </p>

      <p>
        Audio: The audio element is used to include audio files in a web page.
        The audio element has several attributes that allow you to control its
        behavior and appearance. For example, you can set the src attribute to
        specify the audio file to play.
        <br /><br />
        Video: The video element is used to include video files in a web page.
        Like the audio element, the video element has several attributes that
        allow you to control its behavior and appearance. For example, you can
        set the src attribute to specify the video file to play.
        <br /><br />
        Embed: The embed element is used to embed external files in a web page.
        This can include files like PDF documents, audio files, video files,
        etc. The embed element uses the src attribute to specify the URL of the
        external file.
        <br /><br />
        Object: The object element is used to embed objects like Java applets,
        Flash files, and ActiveX components in a web page. The object element
        has several attributes that allow you to control its behavior and
        appearance. For example, you can set the data attribute to specify the
        URL of the object.
        <br /><br />
        Param: The param element is used to pass parameters to plugins like Java
        applets and Flash files. The param element is a child element of the
        object element.
        <br /><br />
        Picture: The picture element is used to define multiple image sources in
        a web page. The picture element uses the source element to specify
        multiple image sources.
      </p>
      <br />
      <h2>Media Attributes</h2>
      <p>
        In addition to the basic attributes, such as id, class, and style, the
        multimedia elements also have several media attributes that allow you to
        control the playback and appearance of the media.
      </p>

      <p>Some of the common media attributes include:</p>

      <p>
        Controls: The controls attribute is used to specify whether the user can
        control the playback of the media. If the controls attribute is present,
        the user will see the standard media controls (play, pause, volume
        control, etc.).
        <br /><br />
        Loop: The loop attribute is used to specify whether the media should
        start over again when it reaches the end. If the loop attribute is
        present, the media will start over again when it reaches the end.
        <br /><br />
        Muted: The muted attribute is used to specify whether the media should
        start in a muted state. If the muted attribute is present, the media
        will start in a muted state.
        <br /><br />
        Poster: The poster attribute is used with the video element to specify
        an image to display while the video is downloading or until the user
        clicks the play button.
        <br /><br />
        Preload: The preload attribute is used to specify how much of the media
        file should be downloaded when the page loads. This can be set to
        "none", "metadata", or "auto".
        <br /><br />
        Autoplay: The autoplay attribute is used to specify whether the media
        should start playing as soon as it is ready. If the autoplay attribute
        is present, the media will start playing as soon as it is ready.
        <br /><br />
        Width and Height: The width and height attributes are used to specify
        the width and height of the media element.
      </p>
    </div>
  );
};

export default Card;
