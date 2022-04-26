using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using Dimex002DAL.Contrato;


namespace Dimex002DAL.Repositorio
{
    public class RepositorioGenerico<T> : IRepositorio<T> where T : class
    {

        // Esta variable privada es con la que se podra 
        /// Realizar la conexion hacia la BD 
        /// En este caso para hacer la conexion 
        /// a la bd se hace mediante Entity Framework
        private dimex002Entity Contexto;
        public void InitRepositorioGenerico(dimex002Entity context)
        {
            this.Contexto = context;

        }
        public bool Actualizar(T entity)
        {
            this.Contexto.Set<T>().Attach(entity);
            Contexto.Entry(entity).State = EntityState.Modified;
            return Contexto.SaveChanges() > 0;
        }

        public async Task<bool> ActualizarAsync(T entity)
        {
            this.Contexto.Set<T>().Attach(entity);
            Contexto.Entry(entity).State = EntityState.Modified;
            return await Contexto.SaveChangesAsync() > 0; ;
        }
        //Realizamos la Insercion 
        // de los campos a la tabla imss_preautorizacion
        public bool Crear(T entity)
        {
            this.Contexto.Set<T>().Add(entity);
            //retorna 1 entero
            return this.Contexto.SaveChanges() > 0;
        }

        public async Task<bool> CrearAsync(T entity)
        {
            this.Contexto.Set<T>().Add(entity);
            return await this.Contexto.SaveChangesAsync() > 0;
        }

        public Task<bool> EliminarAsync(T entity)
        {
            throw new NotImplementedException();
        }

        public bool Eliminarc(T entity)
        {
            throw new NotImplementedException();
        }

        public IQueryable<T> ObtenerAll()
        {
             return this.Contexto.Set<T>().AsNoTracking();
        }

        public bool ObtenerById(string id)
        {
            throw new NotImplementedException();
        }

        public List<T> ObtenerById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<T> ObtenerByIdAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<T> ObtenerByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public List<T> ObtenerTodo()
        {
            throw new NotImplementedException();
        }
    }
}
