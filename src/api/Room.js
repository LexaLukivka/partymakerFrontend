import Http from 'src/services/Http'

class User {

  list() {
    return Http.get('/rooms')
  }

  find(id) {
    return Http.get(`/rooms/${id}`)
  }

  create(form) {
    return Http.post('/rooms', form)
  }

  update(id, form) {
    return Http.put(`/rooms/${id}`, form)
  }

  destroy(id) {
    return Http.delete(`/rooms/${id}`)
  }
}

export default new User()
