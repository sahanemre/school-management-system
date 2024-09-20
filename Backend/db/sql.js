const queris = {
  loginUser: 'SELECT * FROM userinf WHERE email = ? AND password = ?',
  listTeacher:
    'SELECT userinf.ID, userinf.EMAIL, userinf.NAME, userinf.SURNAME, subjecttypes.SUBJECTNAME FROM userinf JOIN subjecttypes ON userinf.SUBJECTTYPE = subjecttypes.ID WHERE userinf.USERTYPE = 2',
}

module.exports = queris
