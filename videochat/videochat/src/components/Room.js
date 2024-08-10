import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomID } = useParams();
    const containerRef = useRef(null);

    useEffect(() => {
        const metting = async (element) => {
            const appID = 2138512890;
            const serverSecret = "9327aa5019119b6ca6b71cb28058c43d";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomID,
                Date.now().toString(),
                "KAUSHAL"
            );
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
            });
        };

        if (containerRef.current) {
            metting(containerRef.current);
        }
    }, [roomID]);

    const joinLink = `https://your-domain.com/room/${roomID}`; // Update with your actual domain

    return (
        <div>
            <div ref={containerRef} style={{ width: "100vw", height: "100vh" }}></div>
            <a href={joinLink} target="_blank" rel="noopener noreferrer">Join Room</a>
        </div>
    );
};

export default Room;
