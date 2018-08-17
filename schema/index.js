const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const casual = require('casual')
const resolvers = require('../resolvers')
const Curso = require('./Curso')
const Profesor = require('./Profesor')

const rootQuery = `
  union ResultadoBusqueda = Profesor | Curso 

  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
    buscar(query: String!): [ResultadoBusqueda]
  }

  type Mutation {
    cursoAdd(curso: NuevoCurso): Curso
    cursoEdit(cursoId: Int!, curso: CursoEditable): Curso
    cursoDelete(cursoId: Int!): Curso
    profesorAdd(profesor: NuevoProfesor): Profesor
    profesorEdit(profesorId: Int!, profesor: ProfesorEditable): Profesor
    profesorDelete(profesorId: Int!): Profesor
  }
`

const schema = makeExecutableSchema({
  typeDefs : [rootQuery, Curso, Profesor],
  resolvers
})

/*addMockFunctionsToSchema({
  schema,
  mocks: {
    Curso: () => {
      return {
        id: casual.uuid,
        titulo: casual.sentences,
        descripcion: casual.description
      }
    },
    Profesor: () => {
      return {
        id: casual.uuid,
        nombre: casual.name,
        nacionalidad: casual.country
      }
    }
  },
  preserveResolvers: true
})*/

module.exports = schema