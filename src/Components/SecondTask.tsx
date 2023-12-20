const SecondTask = () => {
  return (
    <div>
        <h1>Youtube broadcasting on webpage</h1>
      <iframe
        width="1200"
        height="850"
        src="https://www.youtube.com/embed/YAZzSo97P14?si=9dqe0S8BjRiO6ZQO"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <hr />

      <h1>Youtube video with autoplay and muted</h1>
      <iframe
        width="1200"
        height="850"
        src="https://www.youtube.com/embed/q7t2Sac93Pw?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <hr />

      <h1>Youtube video with loop</h1>
      <iframe
        width="1200"
        height="850"
        src="https://www.youtube.com/embed/eu2vMRp_Ibg?loop=1"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <hr />

      <h1>Youtube video without controls</h1>
      <iframe
        width="1200"
        height="850"
        src="https://www.youtube.com/embed/FD7kbTyDOdw?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default SecondTask