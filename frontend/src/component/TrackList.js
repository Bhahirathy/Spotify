import React, { useState } from "react";
export default function TrackList() {
    return (
        <>
            <Card className="bg-transparent link-light mt-3 mb-3">
                {!clicked ? (data?.map((val, index) => {
                    // console.log("name", val.cover)

                    return (
                        <>
                            <Card key={val?.id}
                                onClick={() => { handleSong(val?.url, val.cover, val.name, val.artist, val.accent, index) }}
                                className={`song-card link-light ${index === selectedCard ? "selected-card" : ""}`}>
                                <div className="songItem align-items-center ">
                                    <div className="gap-3 d-flex ">
                                        <img src={val.cover ? imageApi + val?.cover : Loader} alt="image"></img>
                                        <div >
                                            <span className="link-light">{val.name}</span>
                                            <br />
                                            <span><p className="opacity-50">{val.artist}</p></span>
                                        </div>
                                    </div>
                                    <span >{songDuration[val.url] ? (parseFloat(songDuration[val.url] / 60).toFixed(2)) : "3.29"}</span>
                                </div>
                            </Card>
                        </>
                    )
                })) : (data?.map((val, index) => {
                    // console.log("name", val.name)
                    if (val.top_track) {
                        return (
                            <>
                                <Card key={val?.id} onClick={() => { handleSong(val?.url, val.cover, val.name, val.artist) }} className="song-card  link-light">
                                    <div className="songItem align-items-center ">
                                        <div className="gap-3 d-flex ">
                                            <img src={imageApi + val.cover} alt="image"></img>
                                            <div >
                                                <span className="link-light">{val.name}</span>
                                                <br />
                                                <span><p className="opacity-50">{val.artist}</p></span>
                                            </div>
                                        </div>
                                        <span>{songDuration[val?.url] === null ? (parseFloat(songDuration[val.url] / 60).toFixed(2)) : "3.29"}</span>
                                    </div>
                                </Card>
                            </>
                        )
                    }

                }))}
            </Card>
        </>
    )
}