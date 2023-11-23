import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"
import SearchIcon from "../assets/images/Frame.png";
export default function Search({ data, setData, inputClassName }) {
    const [searchItem, setSearchItem] = useState("")
    // const [filteredData, setFilteredData] = useState([])

    const handleSearch = (e) => {
        e.preventDefault()
        let trimmedSearch = searchItem.trim()
        if (trimmedSearch === '') {
            setData(data)
        } else {
            const filteredSongs = data.filter((val) =>
                val.name.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
                val.artist.toLowerCase().includes(trimmedSearch.toLowerCase())
            );
            setData(filteredSongs);
        }
    }

    return (
        <>
            <div className="searchDiv bg-transparent">
                <Form onSubmit={handleSearch}>
                    <div className="d-flex">
                        <Form.Control
                            className={inputClassName}
                            type="search"
                            placeholder="Search Song, Artist"
                            value={searchItem}
                            onChange={(e) => setSearchItem(e.target.value)}
                        >
                        </Form.Control>
                        <Button type="submit" className="search1 border-none bg-transparent"><img src={SearchIcon}></img></Button>
                    </div>
                </Form>
            </div>
        </>
    )
}