import React, { useState } from "react";
import JitsiMeeting from "./JitsiMeeting";
// import JitsiMeeting from "../components/JitsiMeeting";

const DoctorVideoRoom = () => {
  const [roomName, setRoomName] = useState("");

  const handleCreateRoom = () => {
    const newRoom = `Room_${Date.now()}`;
    setRoomName(newRoom);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Doctor Video Room</h2>
      {!roomName ? (
        <button
          onClick={handleCreateRoom}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Start Video Call
        </button>
      ) : (
        <>
          <p className="text-green-700 font-semibold mb-2">
            Room Name: {roomName}
          </p>
          <JitsiMeeting roomName={roomName} />
        </>
      )}
    </div>
  );
};

export default DoctorVideoRoom;
