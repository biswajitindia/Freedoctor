import React from "react";
import { useParams } from "react-router-dom";
import JitsiMeeting from "./JitsiMeeting";
// import JitsiMeeting from "/JitsiMeeting";

const JoinRoom = () => {
  const { roomId } = useParams();

  return (
    <div>
      <h2 className="text-center text-xl font-bold mb-4">🎥 Video Consultation</h2>
      <JitsiMeeting roomName={roomId} />
    </div>
  );
};

export default JoinRoom;