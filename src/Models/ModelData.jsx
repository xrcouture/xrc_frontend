import { Clo3d } from "./Clo3d"
import { Roblox } from "./Roblox"
import { Dcl } from "./Dcl"
import { Sandbox } from "./Sandbox"

// import sandbox from "../assets/sandbox.png"
// import decentraland from "../assets/decentraland.png"
// import roblox from "../assets/roblox.png"
// import clo3d from "../assets/clo3d.png"

const sandbox = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/sandbox.webp"
const decentraland = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/decentraland.webp"
const roblox = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/roblox.webp"
const clo3d = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/clo3d.webp"

const  clotext = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/clo.png'
const roboloxtext = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/robolox.png'
const dcltext = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/dcl.png'
const sandtext = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/sandbox.png'

export const ModelData = {
  "Clo3d": {
    "Platform" : "Clo3d",
    "Polycount" : "300,000",
    "Texture" : "2048 x 2048",
    "Component": <Clo3d />,
    "Background": clo3d,
    "logo":clotext
  }
  ,
  "Roblox": {
    "Platform" : "Roblox",
    "Polycount" : "10,000",
    "Texture" : "1024 x 1024",
    "Component": <Roblox />,
    "Background": roblox,
    "logo":roboloxtext
  }
  ,
  "Decentraland": {
    "Platform" : "Decentraland",
    "Polycount" : "1,500",
    "Texture" : "512 x 512",
    "Component": <Dcl />,
    "Background": decentraland,
    "logo":dcltext
  }
  ,
  "Sandbox": {
    "Platform" : "Sandbox",
    "Polycount" : "Voxel based geometry",
    "Texture" : "Custom texture",
    "Component": <Sandbox />,
    "Background": sandbox,
    "logo":sandtext
  }
}
