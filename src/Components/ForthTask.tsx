import "./Card.css";

const ForthTask = () => {
  return (
    <div className="card">
      <h2>HTTP video streaming</h2>
      <p>
        HTTP video streaming methods involve transmitting video content over the
        internet using the HTTP protocol. This enables the video content to be
        viewed by a large audience and facilitates video on-demand streaming. In
        this text, we will discuss three common HTTP video streaming methods:
        progressive download, adaptive streaming, and HTTP Live Streaming (HLS).
      </p>

      <img
        src="https://www.keycdn.com/img/support/publising-an-http-live-stream-lg.webp"
        alt="HTTP video streaming"
      />
      <br />
      <br />

      <h2>Progressive Download</h2>
      <p>
        In the progressive download method, the video is sent over the internet
        in pieces. As each piece is downloaded, it is played back to the viewer.
        This allows the viewer to start watching the video before it has been
        completely downloaded.
        <br />
        <br />
        Progressive download can be divided into two types: Download and
        Playback and Smooth Streaming.
      </p>

      <br />
      <br />

      <p>
        Download and Playback: This approach involves downloading a part of the
        video, playing it back to the viewer, and then downloading the next
        part. This process continues until the entire video has been downloaded
        and played.
        <br />
        <br />
        Smooth Streaming: Smooth Streaming introduces the concept of quality
        levels, which are different versions of the video encoded at different
        bit rates. As the viewer watches the video, the player adjusts the
        quality level based on the viewer's network conditions. This allows the
        viewer to experience a continuous video playback without buffering.
      </p>

      <br />
      <br />

      <h2>Adaptive Streaming</h2>
      <p>
        Adaptive streaming involves using adaptive algorithms to determine the
        best bitrate for streaming video. The adaptive algorithm selects the
        best quality based on factors such as network conditions, device
        capabilities, and viewer preferences.
        <br />
        <br />
        Adaptive streaming techniques typically involve breaking the video into
        small chunks, known as segments or fragments. Each segment is encoded at
        a different bitrate and may have a different resolution.
        <br />
        <br />
        During playback, the adaptive algorithm monitors the viewer's network
        conditions and adjusts the video quality accordingly. For example, if
        the viewer's network connection becomes weak, the algorithm may switch
        to a lower bitrate version of the video.
        <br />
        <br />
        There are several adaptive streaming techniques available, such as:
      </p>
      <img
        src="https://www.muvi.com/wp-content/uploads/2020/04/adaptive-birtate-vs-multi-bitrate-streaming.jpg"
        alt="Adaptive Streaming"
      />
      <br />
      <br />

      <p>
        Dynamic Adaptive Streaming over HTTP (DASH): DASH is an open standard
        developed by the ISO Moving Picture Experts Group (MPEG). It is based on
        HTTP and enables efficient streaming of high-quality media over the
        internet.
        <br />
        <br />
        Apple HTTP Live Streaming (HLS): HLS is a streaming protocol developed
        by Apple. It uses a playlist (a text file) to list video segments, and
        the client downloads segments on-demand for smooth playback. HLS
        supports various codecs and adaptive bitrate streaming.
        <br />
        <br />
        Microsoft Smooth Streaming: Smooth Streaming is a Microsoft technology
        that allows the efficient streaming of high-quality media over the
        internet. It is designed to be used with Azure Media Services.
      </p>

      <br />
      <br />

      <h2>HTTP Live Streaming (HLS)</h2>
      <p>
        HTTP Live Streaming (HLS) is a protocol developed by Apple. It enables
        efficient streaming of high-quality media over the internet. HLS is
        widely used in streaming services such as Apple's HLS and Amazon Video
        on Demand.
        <br />
        <br />
        The HLS protocol involves the following steps:
      </p>

      <br />
      <br />

      <p>
        Segmentation: The video content is divided into small segments or
        chunks, each typically lasting a few seconds. Each segment is encoded at
        a specific bitrate.
        <br />
        <br />
        Playlist Creation: The server creates a playlist (an XML file) that
        contains a list of all the video segments. The playlist also includes
        information about the duration of each segment and the target bitrate of
        the video.
        <br />
        <br />
        Media Playback: The viewer's device (such as a smartphone or tablet)
        downloads the playlist from the server. Based on the viewer's network
        conditions and the playlist information, the device selects the
        appropriate video segments for playback. The segments are downloaded and
        played back to the viewer, ensuring a smooth and uninterrupted viewing
        experience.
        <br />
        <br />
        Adaptive Streaming: If the viewer's network conditions change during
        playback, the HLS server can create new playlists with different video
        segments, allowing the device to adapt the video quality on-the-fly.
      </p>
      <img
        src="https://cdn-dgmnm.nitrocdn.com/LHsjuemVzrAvilkBHAIXDtrqvflBFfgP/assets/images/source/rev-9d879db/www.cardinalpeak.com/wp-content/uploads/2020/11/HLS-streaming-diagram.png"
        alt="HTTP Live Streaming (HLS)"
      />
      <br />
      <br />
    </div>
  );
};

export default ForthTask;
