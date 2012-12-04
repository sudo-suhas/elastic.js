  /**
    @class
    <p>Wraps any query to be used as a filter. Can be placed within queries 
    that accept a filter.</p>

    <p>The result of the filter is not cached by default.  Set the cache 
    parameter to true to cache the result of the filter. This is handy when the 
    same query is used on several (many) other queries.</p> 
  
    <p>Note, the process of caching the first execution is higher when not 
    caching (since it needs to satisfy different queries).</p>
  
    @name ejs.QueryFilter

    @desc
    Filters documents matching the wrapped query.

    @param {Object} qry A valid query object.
    */
  ejs.QueryFilter = function (qry) {

    /**
         The internal query object. <code>Use get()</code>
         @member ejs.QueryFilter
         @property {Object} query
         */
    var filter = {
      fquery: {
        query: qry.get()
      }
    };

    return {

      /**
            Sets the query

            @member ejs.QueryFilter
            @param {Object} q A valid Query object
            @returns {Object} returns <code>this</code> so that calls can be chained.
            */
      query: function (q) {
        if (q == null) {
          return filter.fquery.query;
        }

        filter.fquery.query = q.get();
        return this;
      },

      /**
            Sets the filter name.

            @member ejs.QueryFilter
            @param {String} name A name for the filter.
            @returns {Object} returns <code>this</code> so that calls can be chained.
            */
      name: function (name) {
        if (name == null) {
          return filter.fquery._name;
        }

        filter.fquery._name = name;
        return this;
      },

      /**
            Enable or disable caching of the filter

            @member ejs.QueryFilter
            @param {Boolean} trueFalse True to cache the filter, false otherwise.
            @returns {Object} returns <code>this</code> so that calls can be chained.
            */
      cache: function (trueFalse) {
        if (trueFalse == null) {
          return filter.fquery._cache;
        }

        filter.fquery._cache = trueFalse;
        return this;
      },
  
      /**
            Sets the cache key.

            @member ejs.QueryFilter
            @param {String} key the cache key as a string.
            @returns {Object} returns <code>this</code> so that calls can be chained.
            */
      cacheKey: function (key) {
        if (key == null) {
          return filter.fquery._cache_key;
        }

        filter.fquery._cache_key = key;
        return this;
      },
            
      /**
            Allows you to serialize this object into a JSON encoded string.

            @member ejs.QueryFilter
            @returns {String} returns this object as a serialized JSON string.
            */
      toString: function () {
        return JSON.stringify(filter);
      },

      /**
            Retrieves the internal <code>filter</code> object. This is typically used by
            internal API functions so use with caution.

            @member ejs.QueryFilter
            @returns {String} returns this object's internal <code>filter</code> property.
            */
      get: function () {
        return filter;
      }
    };
  };
