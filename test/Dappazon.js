const { expect } = require("chai");


describe("Upload Contract", function () {
  let Upload;
  let upload;
  let owner;
  const id = 1;
  const level = 5;
  const points = 100;
  const achievements = [1, 2, 3];

  beforeEach(async function () {
    Upload = await ethers.getContractFactory("Upload");
    upload = await Upload.deploy();
    [owner] = await ethers.getSigners();
  });

  it("Should upload data", async function () {
    const tx = await upload.upload_data(id, level, points, achievements);
    await tx.wait(); 

    const uploadedData = await upload.getUploadedData(id);

    console.log(uploadedData);
    expect(uploadedData.id).to.equal(id);
    expect(uploadedData.level).to.equal(level);
    expect(uploadedData.points).to.equal(points);
    expect(uploadedData.achievement).to.deep.equal(achievements);
  });
});
