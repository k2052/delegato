Mixin = require 'mixto'

module.exports =
class Delegator extends Mixin
  @delegatesProperties: (propertyNames..., {toProperty, toMethod, toObject}) ->
    object = null
    object = toObject if toObject?
      
    for propertyName in propertyNames
      do (propertyName) =>
        Object.defineProperty @, propertyName,
          if toProperty?
            get: ->
              object = @ unless toObject?
              object[toProperty][propertyName]
            set: (value) ->
              object = @ unless toObject?
              object[toProperty][propertyName] = value
          else if toMethod?
            get: ->
              object = @ unless toObject?
              object[toMethod]()[propertyName]
            set: (value) ->
              object = @ unless toObject?
              object[toMethod]()[propertyName] = value
          else if toObject?
            get: ->
              object[propertyName]
            set: (value) ->
              object[propertyName] = value
          else
            throw new Error("No delegation target specified")

  @delegatesMethods: (methodNames..., {toProperty, toMethod, toObject}) ->
    object = null
    object = toObject if toObject?

    for methodName in methodNames
      do (methodName) =>
        if toProperty?
          @[methodName] = (args...) ->
            object = @ unless toObject?
            object[toProperty][methodName](args...)
        else if toMethod?
          @[methodName] = (args...) ->
            object = @ unless toObject?
            object[toMethod]()[methodName](args...)
        else if toObject?
          @[methodName] = (args...) ->
            object[methodName](args...)
        else
          throw new Error("No delegation target specified")
  
  ##
  # TODO Eliminate Duplication
  ##
  delegatesProperties: (propertyNames..., {toProperty, toMethod, toObject}) ->
    object = null
    object = toObject if toObject?
      
    for propertyName in propertyNames
      do (propertyName) =>
        Object.defineProperty @, propertyName,
          if toProperty?
            get: ->
              object = @ unless toObject?
              object[toProperty][propertyName]
            set: (value) ->
              object = @ unless toObject?
              object[toProperty][propertyName] = value
          else if toMethod?
            get: ->
              object = @ unless toObject?
              object[toMethod]()[propertyName]
            set: (value) ->
              object = @ unless toObject?
              object[toMethod]()[propertyName] = value
          else if toObject?
            get: ->
              object[propertyName]
            set: (value) ->
              object[propertyName] = value
          else
            throw new Error("No delegation target specified")

  delegatesMethods: (methodNames..., {toProperty, toMethod, toObject}) ->
    object = null
    object = toObject if toObject?

    for methodName in methodNames
      do (methodName) =>
        if toProperty?
          @[methodName] = (args...) ->
            object = @ unless toObject?
            object[toProperty][methodName](args...)
        else if toMethod?
          @[methodName] = (args...) ->
            object = @ unless toObject?
            object[toMethod]()[methodName](args...)
        else if toObject?
          @[methodName] = (args...) ->
            object[methodName](args...)
        else
          throw new Error("No delegation target specified")

  @delegatesProperty: (args...) -> @delegatesProperties(args...)
  @delegatesMethod: (args...) -> @delegatesMethods(args...)
