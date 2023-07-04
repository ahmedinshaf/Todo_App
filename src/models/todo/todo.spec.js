'use strict';
const {buildMakeTodo} = require('./todo.js');
describe('makeTodo', () => {
    test('returns an object with the correct properties', () => {
      const todo = buildMakeTodo()({
        id: '123',
        title: 'Buy groceries',
        description: 'Milk, bread, eggs',
        date: '2022-01-01',
        status: 'incomplete'
      })
      expect(todo).toHaveProperty('getId')
      expect(todo).toHaveProperty('getTitle')
      expect(todo).toHaveProperty('getDescription')
      expect(todo).toHaveProperty('getDate')
      expect(todo).toHaveProperty('getStatus')
    })
  
    test('throws an error if title is missing', () => {
      expect(() => buildMakeTodo()({
        description: 'Milk, bread, eggs',
        date: '2022-01-01',
        status: 'incomplete'
      })).toThrow('Todo must have a title.')
    })
  
    test('throws an error if description is missing', () => {
      expect(() => buildMakeTodo()({
        title: 'Buy groceries',
        date: '2022-01-01',
        status: 'incomplete'
      })).toThrow('Todo must have a description.')
    })
  
    test('throws an error if date is missing', () => {
      expect(() => buildMakeTodo()({
        title: 'Buy groceries',
        description: 'Milk, bread, eggs',
        status: 'incomplete'
      })).toThrow('Todo must have a date.')
    })
  
    test('throws an error if status is missing', () => {
      expect(() => buildMakeTodo()({
        title: 'Buy groceries',
        description: 'Milk, bread, eggs',
        date: '2022-01-01'
      })).toThrow('Todo must have a status.')
    })
  
    test('returns an immutable object', () => {
        const todo = buildMakeTodo()({
          id: '123',
          title: 'Buy groceries',
          description: 'Milk, bread, eggs',
          date: '2022-01-01',
          status: 'incomplete'
        })
      
        expect(() => {
          todo.id = '456'
        }).toThrow()
      
        expect(todo.getId()).toBe('123')
      })
  })