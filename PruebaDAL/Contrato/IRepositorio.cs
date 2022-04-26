using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dimex002DAL.Contrato
{
    public interface IRepositorio<T> where T : class
    {

        IQueryable<T> ObtenerAll();
        Task<T> ObtenerByIdAsync(int id);
        Task<T> ObtenerByIdAsync(string id);
        Task<bool> CrearAsync(T entity);
        Task<bool> ActualizarAsync(T entity);
        Task<bool> EliminarAsync(T entity);
        List<T> ObtenerTodo();
        List<T>  ObtenerById(int id);
        bool ObtenerById(string id);
        bool Crear(T entity);
        bool Actualizar(T entity);
        bool Eliminarc(T entity);

    }
}
