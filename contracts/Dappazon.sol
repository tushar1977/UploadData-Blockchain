// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Upload {
    struct data {
        uint256 id;
        uint256 level;
        uint256 points;
        uint[] achievement;
    }

    mapping(uint256 => data) public add_data;

    function upload_data(
        uint256 _id,
        uint256 _level,
        uint256 _points,
        uint[] memory _achievement
    ) public {
        data memory upload = data(_id, _level, _points, _achievement);
        add_data[_id] = upload;
    }

    function getUploadedData(uint256 _id) public view returns (data memory) {
        return add_data[_id];
    }
}
