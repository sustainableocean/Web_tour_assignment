var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1718.5,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4525496255158559
      },
      "linkHotspots": [
        {
          "yaw": 1.2915072744028038,
          "pitch": 0.005745300373616757,
          "rotation": 6.283185307179586,
          "target": "1-street"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3684903699047517,
          "pitch": -0.0021934282237978664,
          "title": "Bedroom",
          "text": "This is a beautiful bedroom"
        }
      ]
    },
    {
      "id": "1-street",
      "name": "Street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1747,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6440116386078305,
          "pitch": 0.002299734932826425,
          "rotation": 1.5707963267948966,
          "target": "2-bridge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Street",
          "text": "Welcome to the street"
        }
      ]
    },
    {
      "id": "2-bridge",
      "name": "Bridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6481825191994997,
          "pitch": 0.200814225558533,
          "rotation": 3.141592653589793,
          "target": "0-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4940624344107327,
          "pitch": -0.05991767205252607,
          "title": "Bridge",
          "text": "A&nbsp; small bridge"
        }
      ]
    }
  ],
  "name": "Web-tour assignment",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
