export const testAction = (action, actualPayload, expectedPayload) => {
  describe(`${action.name}`, () => {
    Object.keys(expectedPayload).forEach(key => {
      it(`should return a payload with the correct ${key}`, () => {
        expect(actualPayload[key]).toEqual(expectedPayload[key])
      })
    })

    it('should not have any untested payload properties', () => {
      expect(Object.keys(actualPayload).length).toBe(Object.keys(expectedPayload).length)
    })

    it('should return a payload with a defined type', () => {
      expect(actualPayload.type).not.toBe(undefined)
    })
  })
}
