import { Clo3d } from "./Clo3d"
import { Roblox } from "./Roblox"
import { Dcl } from "./Dcl"
import { Sandbox } from "./Sandbox"

import sandbox from "../assets/sandbox.png"
import decentraland from "../assets/decentraland.png"
import roblox from "../assets/roblox.png"
import clo3d from "../assets/clo3d.png"

import clotext from '../assets/logo-text/clo.png'
import roboloxtext from '../assets/logo-text/robolox.png'
import dcltext from '../assets/logo-text/dcl.png'
import sandtext from '../assets/logo-text/sandbox.png'

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
