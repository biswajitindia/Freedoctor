import React, { useState } from "react";
import JitsiMeeting from "./JitsiMeeting";
// import JitsiMeeting from "../components/JitsiMeeting";

const PatientJoinRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    if (roomName.trim() !== "") setJoined(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Join Doctor's Room</h2>
      {!joined ? (
        <>
          <input
            type="text"
            placeholder="Enter Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="border p-2 mr-2"
          />
          <button
            onClick={handleJoin}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Join Room
          </button>
        </>
      ) : (
        <>
          <p className="text-green-700 font-semibold mb-2">
            Joining Room: {roomName}
          </p>
          <JitsiMeeting roomName={roomName} />
        </>
      )}
    </div>
  );
};

export default PatientJoinRoom;
