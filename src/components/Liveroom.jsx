import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const LivePage = () => {
  const { roomId } = useParams();

  const liveClass = async (element) => {
    const appID = 1600619734;
    const serverSecret = "73167369a04d66b8ebeeec6899cb2cc2";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Your name"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      turnOnCameraWhenJoining: false,
      showMyCameraToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: false,
      showTextChat: true,
      showUserList: false,
      scenario: {
        // live: true,
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
    });
  };

  useEffect(() => {
    document.title = 'HOME:Learn';
    const originalBackground = document.body.className;
    document.body.className = 'bg-gradient-animation';
    return () => {
      document.body.className = originalBackground;
    };
  }, []);

  return (
    <div className="LivePage">
      <div ref={liveClass} />
    </div>
  );
};

export default LivePage;
