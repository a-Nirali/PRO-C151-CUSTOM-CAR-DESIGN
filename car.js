AFRAME.registerComponent("car", {
    schema: {
      modelRef: { type: "string", default: "./assets/car/scene.gltf" }
    },
    init: function() {
      // Do something when component first attached.
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: 50, z: 80 };
      const rotation = { x: 0, y: -100, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    }
  });


  AFRAME.registerComponent("base", {
    schema: {
      radius: { type: "number", default: 150 },
      height: { type: "number", default: 3 }
    },
  
    init: function() {
      // Do something when component first attached.
      this.el.setAttribute("geometry", {
        primitive: "cylinder",
        radius: this.data.radius,
        height: this.data.height
      });
      this.el.setAttribute("material", { color: "#1769aa" });
    }
  });