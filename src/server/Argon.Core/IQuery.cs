namespace Argon.Core
{
    using MediatR;

    public interface IQuery<TResponse> : IRequest<TResponse>
    {
    }
}
