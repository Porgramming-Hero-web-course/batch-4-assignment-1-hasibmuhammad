type Circle = {
  shape: "circle";
  radius: number;
};

type Recatangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Recatangle;

const calculateShapeArea = (shape: Shape): number => {
  if (shape.shape === "circle") {
    return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  } else {
    throw new Error("The shape must be from circle and rectangle.");
  }
};

const circle: Circle = { shape: "circle", radius: 5 };
console.log(calculateShapeArea(circle));

const rectangle: Recatangle = { shape: "rectangle", width: 4, height: 6 };
console.log(calculateShapeArea(rectangle));
