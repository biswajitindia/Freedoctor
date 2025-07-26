// src/components/JitsiMeeting.js
import React, { useEffect, useRef } from "react";

const JitsiMeeting = ({ roomName }) => {
  const jitsiRef = useRef(null);

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName,
      width: "100%",
      height: 600,
      parentNode: jitsiRef.current,
      configOverwrite: { startWithAudioMuted: true },
      interfaceConfigOverwrite: {
        DEFAULT_REMOTE_DISPLAY_NAME: "Guest",
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose();
  }, [roomName]);

  return <div ref={jitsiRef} />;
};

export default JitsiMeeting;
