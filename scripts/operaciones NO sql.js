//Inserción de Datos

db.students.insertMany([
    { "_id": ObjectId(), "nombre": "Ana Pérez", "email": "ana.perez@escuela.com", "edad": 15 },
    { "_id": ObjectId(), "nombre": "Carlos López", "email": "carlos.lopez@escuela.com", "edad": 16 }
]);

//Actualización de Datos

db.students.updateOne(
    { "nombre": "Ana Pérez" },
    { $set: { "tutor": { "nombre": "María López", "telefono": "555-1234" } } }
);

// Creación de curso con upsert y setOnInsert para añadir un curso si no existe:

db.courses.updateOne(
    { "_id": ObjectId("507f1f77bcf86cd799439015") },
    {
        $setOnInsert: {
            "nombre": "Química",
            "profesor_id": ObjectId("507f1f77bcf86cd799439012")
        }
    },
    { upsert: true }
);

// Añadir cursos a la inscripción de un estudiante con $addToSet y $each:

db.enrollments.updateOne(
    { "estudiante_id": ObjectId("507f1f77bcf86cd799439013") },
    { $addToSet: { "cursos": { $each: [ObjectId("507f1f77bcf86cd799439011"), ObjectId("507f1f77bcf86cd799439012")] } } }
);




