// Direct API testing with cy.request — no browser/UI involved.
// Target: https://reqres.in, a free public test API.
describe('Users API (cy.request)', () => {
  it('returns a 200 and the expected user schema for a valid id', { tags: ['@smoke', '@regression'] }, () => {
    cy.apiGetUser(2).then((response) => {
      expect(response.status).to.eq(200);

      const { data } = response.body;
      expect(data).to.have.property('id', 2);
      expect(data).to.have.property('email').that.is.a('string');
      expect(data).to.have.property('first_name').that.is.a('string');
      expect(data).to.have.property('last_name').that.is.a('string');
    });
  });

  it('returns a 404 for a user id that does not exist', { tags: '@regression' }, () => {
    cy.apiGetUser(999).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.deep.eq({});
    });
  });
});
